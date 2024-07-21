// store.js
import {create} from "zustand";

const initialState = {
  selectedUserType: "general",
  formData: {
    selectField: "",
    otherOption: "",
  },
  errorMessage: "",
  imageError: "",
  isInfoAreaVisible: false,
  isImageCreated: false,
  buttonClass: "inactive",
  uploadedImage: null,
  analysisInfo: {
    category: "",
    material: "",
    color: "",
  },
  reformForm: {
    neck_line: "",
    sleeve_length: "",
    pattern: "",
    pocket: "",
    zip: "",
    button: "",
    addt_design: "",
  },
  createdImageUrl: "https://i.imgur.com/BM8mG7U.png",
};

const useServiceGeneralWriteStore = create((set) => ({
  ...initialState,

  // 상태 업데이트를 위한 액션 정의
  setSelectedUserType: (type) => set({ selectedUserType: type }),
  setFormData: (formData) => set({ formData }),
  setErrorMessage: (errorMessage) => set({ errorMessage }),
  setImageError: (imageError) => set({ imageError }),
  setIsInfoAreaVisible: (isVisible) => set({ isInfoAreaVisible: isVisible }),
  setIsImageCreated: (isCreated) => set({ isImageCreated: isCreated }),
  setButtonClass: (buttonClass) => set({ buttonClass }),
  setUploadedImage: (image) => set({ uploadedImage: image }),
  setAnalysisInfo: (info) => set({ analysisInfo: info }),
  setReformForm: (form) => set({ reformForm: form }),
  setCreatedImageUrl: (url) => set({ createdImageUrl: url }),
  setCategory: (category) => set((state) => ({
    analysisInfo: { ...state.analysisInfo, category },
  })),

  // 모든 상태를 초기화하는 함수 정의
  resetState: () => set(initialState),
}));

export default useServiceGeneralWriteStore;
