import { useState, useEffect } from 'react';

const useImagePreloader = (imageUrls) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        if (imageUrls.length === 0) {
            setImagesLoaded(true);
        return;
    }

    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const handleImageLoad = () => {
        loadedImages += 1;
        setLoadedCount(loadedImages);
        
        if (loadedImages === totalImages) {
            setImagesLoaded(true);
        }
    };

    const handleImageError = () => {
        loadedImages += 1;
        setLoadedCount(loadedImages);
        
    if (loadedImages === totalImages) {
            setImagesLoaded(true);
        }
    };

    // Preload all images
    imageUrls.forEach((url) => {
    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    img.src = url;
        });

    // Cleanup function
    return () => {
            setLoadedCount(0);
        };
    }, [imageUrls]);

    return { imagesLoaded, loadedCount, totalImages: imageUrls.length };
};

export default useImagePreloader;