import React from 'react';
import ImageUploadingModule from 'react-images-uploading';
import { FaUpload } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const ImageUploading = ImageUploadingModule.default || ImageUploadingModule;

const FileUploading = ({ images, setImages }) => {
    const maxNumber = 1;

    const onChange = (imageList) => {
        setImages(imageList);
    };

    return (
        <div>
            <ImageUploading
                multiple={false} // Выключено, так как maxNumber = 1
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    <div>
                        <div
                            className="border relative text-6xl border-black w-[200px] h-[150px] rounded-lg flex justify-center items-center cursor-pointer"
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={!images.length ? onImageUpload : undefined} // Клик открывает загрузку только если пусто
                            {...dragProps}
                        >
                            {images.length ? (
                                imageList.map((image, index) => (
                                    <div key={index} className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src={image['data_url']}
                                            alt="Uploaded preview"
                                        />
                                        <div className="absolute top-2 right-2 bg-white p-1 rounded-md shadow-md flex gap-1 z-10">
                                            {/* Кнопка Редактировать (заменить) */}
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onImageUpdate(index);
                                                }}
                                                className="text-lg text-blue-600 hover:scale-110 transition-transform"
                                            >
                                                {/* Вы можете вернуть CiEdit сюда, если импортируете его обратно */}
                                                <span className="text-sm block px-1">Изменить</span>
                                            </button>

                                            {/* Кнопка Удалить */}
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onImageRemove(index);
                                                }}
                                                className="text-lg text-red-600 hover:scale-110 transition-transform"
                                            >
                                                <MdDeleteOutline />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <FaUpload />
                            )}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
export default FileUploading;