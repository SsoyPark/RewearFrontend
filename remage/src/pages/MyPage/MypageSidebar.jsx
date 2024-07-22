import React, { useState } from 'react';
import Button from '../../components/common/Button';
import useAuthStore from '../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const MypageSidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLogoutClick = () => {
    navigate('/');
    logout();
  };

  const handleAvatarClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('profile_picture', selectedFile);

      try {
        const response = await axios({
          method: 'post', // 또는 'put', 'patch' 등 필요한 HTTP 메서드
          url: 'http://localhost:8000/users/profile/', // 실제 업로드 URL
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Profile updated successfully:', response.data);
        handleCloseModal(); // 업로드 완료 후 모달 닫기
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  return (
    <aside className="mp-sidebar">
      <div className="user-info">
        <div className="user-avatar" onClick={handleAvatarClick}>
          <span className="material-icons user-avatar-icons">person</span>
        </div>
        <div className="user-name">악수하는햄스터<span> 님</span></div>
        <Button
          text="회원정보 수정"
          url="/mypage/edit/"
          className="editprofile-button"
        />
      </div> 
      <div className="spacer"></div>
      {/* <button className="delete-account-button">회원 탈퇴</button> */}
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleFileChange={handleFileChange}
        handleFileSubmit={handleFileSubmit}
      />
    </aside>
  );
};

export default MypageSidebar;
