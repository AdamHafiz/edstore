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
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "women",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "men",
          imageUrl: "https://thumbs.dreamstime.com/b/hat-18089956.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
