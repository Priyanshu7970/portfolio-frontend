import React from 'react';
import { PortableText } from '@portabletext/react';
import { Image } from 'react-bootstrap';
import ImageComponent from './ImageComponent';
import TextComponent from './TextComponent';

const onRenderBlock = (props) => {
  switch (props.type) {
      case 'image':
          return (
              <div>
                  <Image src={props.value.asset.url} alt={props.value.alt} />
                  <p>{props.children}</p>
              </div>
          );
      case 'heading':
          return (
              <h2>{props.children}</h2>
          );
      default:
          return <p>{props.children}</p>;
  }
};
const PortableTextComponent = ({ value }) => {
    return (
        <PortableText value={value} onRenderBlock={onRenderBlock} />
  
    );
};

export default PortableTextComponent;