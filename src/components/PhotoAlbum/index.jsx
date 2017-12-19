import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Measure from 'react-measure';

export default class PhotoAlbum extends Component {
  constructor() {
    super();
    this.state = {
      width: -1,
      currentImage: 0,
    }
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    const width = this.state.width;
    return(
      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
        ({measureRef}) => {
          if (width < 1 ){
            return <div ref={measureRef}></div>;
          }
          let columns = 1;
          if (width >= 480){
            columns = 2;
          }
          if (width >= 1024){
            columns = 3;
          }
          if (width >= 1824){
            columns = 4;
          }
          return (
            <div ref={measureRef}>
              <Gallery
                photos= {PHOTO_SET}
                columns={columns}
                onClick={this.openLightbox} />
              <Lightbox images={PHOTO_SET}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
              />
              <p>
                Engagement photos taken by <a href="http://www.frankjleephotography.com/">Frank J Lee</a>
              </p>
            </div>
          );
        }
      }
      </Measure>
    );
  }
}

let PHOTO_SET = [
  {
    src: 'https://imgur.com/j7UyPkQ.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://imgur.com/eAtwB9H.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://imgur.com/YqdK0f2.jpg',
    width: 4,
    height: 3
  },
  {
    src: "https://imgur.com/5SkWrJ5.jpg",
    width: 4,
    height: 3
  },
  {
    src: 'https://i.imgur.com/xIyCamg.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://imgur.com/tx8HTsZ.jpg',
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/9TpU9Dz.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/LqANCyd.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://i.imgur.com/BXYMIFE.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/dmnWHyL.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://i.imgur.com/LQNpbf7.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/ZqxPwwN.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/8KvkDws.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/SjyZI2s.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/TkSMtWw.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://i.imgur.com/f5OREMK.jpg",
    width: 4,
    height: 3
  },

  {
    src: "https://i.imgur.com/UceXlUd.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/QBEkN7t.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/ZAybe0l.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/g9cL8dw.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/jojqHrk.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/f9anKeJ.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/fJn9Txs.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/QofOpOU.jpg",
    width: 4,
    height: 3
  },
];
