import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          id: 3,
        },
        {
          title: "women",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "men",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
