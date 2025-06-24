const ImageModal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl hover:text-gray-300"
        >
          ✕ Close
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto"
          />
          {title && (
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
