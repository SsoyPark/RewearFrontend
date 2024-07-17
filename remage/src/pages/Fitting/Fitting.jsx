import React, { useState, useEffect } from 'react';

const Fitting = () => {
    const baseURL = "http://127.0.0.1:8001";
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file1URL, setFile1URL] = useState(null);
    const [file2URL, setFile2URL] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const handleFileChange1 = (event) => {
        const file = event.target.files[0];
        setFile1(file);
        setFile1URL(URL.createObjectURL(file));
    };

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        setFile2(file);
        setFile2URL(URL.createObjectURL(file));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!file1 || !file2) {
            alert("Please select both files.");
            return;
        }

        const formData = new FormData();
        formData.append("file1", file1);
        formData.append("file2", file2);

        try {
            const response = await fetch(`${baseURL}/analysis/predict`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImageURL(imageUrl);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(() => {
        // 컴포넌트가 언마운트될 때 Blob URL을 해제합니다.
        return () => {
            if (file1URL) {
                URL.revokeObjectURL(file1URL);
            }
            if (file2URL) {
                URL.revokeObjectURL(file2URL);
            }
            if (imageURL) {
                URL.revokeObjectURL(imageURL);
            }
        };
    }, [file1URL, file2URL, imageURL]);

    return (
        <div>
            <h1>Upload Two Images</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="file1">Image 1:</label>
                    <input type="file" id="file1" accept="image/*" onChange={handleFileChange1} />
                    {file1 && <p>Selected file: {file1.name}</p>}
                    {file1URL && <img src={file1URL} alt="Selected Image 1" style={{maxWidth: '300px', marginTop: '10px'}} />}
                </div>
                <div>
                    <label htmlFor="file2">Image 2:</label>
                    <input type="file" id="file2" accept="image/*" onChange={handleFileChange2} />
                    {file2 && <p>Selected file: {file2.name}</p>}
                    {file2URL && <img src={file2URL} alt="Selected Image 2" style={{maxWidth: '300px', marginTop: '10px'}} />}
                </div>
                <button type="submit">Upload</button>
            </form>
            {imageURL && (
                <div>
                    <h2>Result Image:</h2>
                    <img src={imageURL} alt="Result" style={{maxWidth: '300px', marginTop: '10px'}} />
                </div>
            )}
        </div>
    );
}

export default Fitting;
