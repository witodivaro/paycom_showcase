import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { ItemCallback, Layout, Responsive, WidthProvider } from 'react-grid-layout';
import { AlbumImage } from '../../hooks/useAlbumsImages.hook';
import '../../../node_modules/react-grid-layout/css/styles.css';
import './AlbumsGallery.css';
import CloseWrapper from '../close-wrapper/CloseWrapper';
import GalleryImage from '../gallery-image/GalleryImage';

type AlbumsGalleryProps = {
  images: AlbumImage[];
  onRemoveImage?: (imageId: number) => void;
};

const ResponsiveGridLayout = WidthProvider(Responsive);

const AlbumsGallery = ({ images, onRemoveImage }: AlbumsGalleryProps) => {
  // todo: implement AlbumsGallery component

  return null
};

export default AlbumsGallery;
