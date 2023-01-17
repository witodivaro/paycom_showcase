import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import {
  ItemCallback,
  Layout,
  Responsive,
  WidthProvider,
} from 'react-grid-layout';
import { AlbumImage } from '../../hooks/useAlbumsImages.hook';
import '../../../node_modules/react-grid-layout/css/styles.css';
import './AlbumsGallery.css';
import CloseWrapper from '../close-wrapper/CloseWrapper';
import GalleryImage from '../gallery-image/GalleryImage';
import BaseImage from '../base-image/BaseImage';

type AlbumsGalleryProps = {
  images: AlbumImage[];
  onRemoveImage?: (imageId: number) => void;
};

const ResponsiveGridLayout = WidthProvider(Responsive);

/* 
    Click on expand button will cause fetching the album's photos 
    and displaying a set of only 12 of them on a screen. 
    Only thumbnail images to be displayed, 
    in a way of a visual grid of 3 rows, 
    4 images in each. Don't use a table component to display photos, 
    use css only.
*/

const createLayout = (count: number): Layout[] =>
  Array.from({ length: count }).map((_, i) => ({
    x: i % 4,
    y: Math.floor(i / 4),
    w: 1,
    h: 1,
    isResizable: false,
    i: (i + 1).toString(),
  }));

const defaultLayout = createLayout(12);

const layouts = {
  lg: defaultLayout,
  md: defaultLayout,
  sm: defaultLayout,
  xs: defaultLayout,
  xxs: defaultLayout,
};

const AlbumsGallery = ({ images, onRemoveImage }: AlbumsGalleryProps) => {
  // todo: implement AlbumsGallery component

  if (images.length === 0) {
    return null;
  }

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, sm: 4, md: 4, xs: 4, xxs: 4 }}
    >
      {images.map((img) => (
        <div key={img.id}>
          <GalleryImage image={img} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default AlbumsGallery;
