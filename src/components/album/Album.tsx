import React, { useEffect, useState } from 'react';
import { AlbumType } from '../../hooks/useAlbums.hook';
import { AlbumImage, useAlbumsImages } from '../../hooks/useAlbumsImages.hook';
import { User } from '../../hooks/useUsers.hook';
import AlbumsGallery from '../albums-gallery/AlbumsGallery';
import ToggleArrow from '../toggle-arrow/ToggleArrow';
import './Album.css';

type AlbumProps = {
  album: AlbumType;
  user: User | undefined;
};

function Album({ album, user }: AlbumProps) {
  // todo: implementation of this components is not complete, please finish it
  const [isOpen, setIsOpen] = useState(false);
  const [shouldFetchImages, setShouldFetchImages] = useState(false);
  const [authorString, setAuthorString] = useState('');
  const [prefetchTimeout, setPrefetchTimeout] = useState<number | null>(null);
  const [localImages, setLocalImages] = useState<AlbumImage[]>([]);
  const [images, isLoading] = useAlbumsImages(album.id, shouldFetchImages);

  useEffect(() => {
    setAuthorString(
      user ? `${user.username}, ${user.email}` : 'Unknown author'
    );
  }, [user]);

  const handleMouseEnter = () => {
    if (prefetchTimeout) {
      return;
    }

    setPrefetchTimeout(
      window.setTimeout(() => {
        setShouldFetchImages(true);
      }, 300)
    );
  };

  const handleMouseLeave = () => {
    if (prefetchTimeout) {
      clearTimeout(prefetchTimeout);
      setPrefetchTimeout(null);
    }
  };

  useEffect(() => {
    if (images.length) {
      setLocalImages(images);
    }
  }, [images]);

  const handleOnRemoveImage = (imageId: number) => {
    setLocalImages(localImages.filter((image) => image.id !== imageId));
  };

  return (
    <div
      className="rounded-lg shadow-md py-6 px-5  bg-gray-100 flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row items-center">
        <div className="album-title-author box-border overflow-hidden grow">
          <h2
            className="text-md font-black tracking-wide truncate uppercase"
            title={album.title}
          >
            {album.title}
          </h2>
        </div>
        <ToggleArrow
          onClick={handleClick}
          toggle={isOpen}
          className="basis-10 shrink-0"
        />
      </div>

      <div
        className={`gallery ${isOpen ? '' : 'collapsed'}`}
        aria-hidden={isOpen ? 'false' : 'true'}
        tabIndex={isOpen ? 1 :  -1}
      >
        <hr className="my-5 bg-black" />
        {localImages.length === 0 && !isLoading && (
          <div className="text-center text-slate-700">This album is empty!</div>
        )}
        <AlbumsGallery
          images={localImages}
          onRemoveImage={handleOnRemoveImage}
        />
      </div>
    </div>
  );
}

export default Album;
