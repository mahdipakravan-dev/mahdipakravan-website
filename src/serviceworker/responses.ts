import {
  about_md,
  baran_md,
  kian_md,
  marcato_md,
  mine_md,
  parax_md,
  tavanasho_md,
} from "./md";

type GalleryItem = {
  id?: number;
  title: string;
  desc: string;
  src: string;
};
type Response = {
  url?: string;
  object?: {
    md?: string;
    gallery?: Array<GalleryItem>;
  };
};
class ResponseBuilder {
  private _object?: Response = {
    url: "",
    object: {
      md: "",
      gallery: [],
    },
  };

  static clone() {
    return new ResponseBuilder();
  }

  setUrl(url: string) {
    this._object = {
      ...this._object,
      url,
    };
    return this;
  }

  setMd(md: string) {
    this._object = {
      ...this._object,
      object: {
        ...this._object?.object,
        md,
      },
    };
    return this;
  }

  addGallery(galleryItem: GalleryItem) {
    const galleryItems = this._object?.object?.gallery;
    this._object?.object?.gallery?.push({
      ...galleryItem,
      id: galleryItems?.length ? galleryItems?.length + 1 : 1,
    });
    return this;
  }

  build() {
    console.log(this._object);
    return this._object;
  }
}

export default [
  ResponseBuilder.clone()
    .setUrl("/api/about?file=null")
    .setMd(about_md)
    .addGallery({
      src: "/self/2.jpeg",
      title: "I started as a child :)",
      desc: "My father is a teacher and he is one of the first people in our family who got acquainted with school computer systems. I grew up with computers since I was a child.",
    })
    .addGallery({
      src: "/self/3.jpeg",
      title: "First Project in 14 years-old",
      desc: "I started programming with C# when I was 14 years old , i created some software available at mahdisoft.blog.ir",
    })
    .addGallery({
      src: "/self/1.jpg",
      title: "First Victory in DGISOFT startup !",
      desc: "At the age of 16, my startup called DGISoft was successful and I participated and presented at elecomp",
    })
    .addGallery({
      src: "/self/4.jpg",
      title: "And now I have been coding very seriously for 6 years",
      desc: "In these six years, I focused on the development of Fullstack projects using React,Nodejs and now maybe I am a Mern Stack developer :)",
    })
    .build(),
  ResponseBuilder.clone()
    .setUrl("/api/about?file=KianIranian_iGap")
    .setMd(kian_md)
    .addGallery({
      src: "/kian/1.jpg",
      title: "i was developed iGapMessenger Web!",
      desc: "here is the birthday of 6th year of iGap",
    })
    .addGallery({
      src: "/kian/3.jpeg",
      title: "Frontend Team (2020)",
      desc: "4 frontend-developer !",
    })
    .addGallery({
      src: "/kian/4.jpeg",
      title: "Frontend Team (2021)",
      desc: "6 frontend-developer !",
    })
    .addGallery({
      src: "/kian/2.jpg",
      title: "celebrated 4 year of kian iranian",
      desc: "we was 6 frontend-developer !",
    })
    .build(),
  ResponseBuilder.clone()
    .setUrl("/api/about?file=Baran")
    .setMd(baran_md)
    .addGallery({
      src: "/baran/1.jpeg",
      title: "Frontend Team (2020)",
      desc: "we was 3 member in frontend team , we developed a VOD platform named iGapTV(VIDOLIM) , this project available in _projects tab !",
    })
    .build(),
  ResponseBuilder.clone()
    .setUrl("/api/about?file=Marcato")
    .setMd(marcato_md)
    .addGallery({
      id: 1,
      src: "/marcato/1.jpg",
      title: "This is Amir !",
      desc: "i and amir , we decied to create a music store named marcato ! , we developed this startup with Node.js !",
    })
    .addGallery({
      id: 2,
      src: "/marcato/2.jpeg",
      title: "our office , ParadiseHUB !",
      desc: "we developed this startup in weekend at a co-working space named paradiseHUB",
    })
    .build(),
  ResponseBuilder.clone()
    .setUrl("/api/about?file=Parax")
    .setMd(parax_md)
    .addGallery({
      id: 1,
      src: "/parax/1.jpg",
      title: "Our Team (Backend Team)",
      desc: "I was the only nodejs-developer in this team , The rest of the guys, Mehdi, Maryam and Saman, are Laravel developers",
    })
    .build(),
  ResponseBuilder.clone()
    .setUrl("/api/about?file=MineTaxi")
    .setMd(mine_md)
    .addGallery({
      src: "/mine/1.jpeg",
      title: "i was only Node.js Developer",
      desc: "I worked for one year as the only developer in this company and implemented the backend of a taxi request application in this company.",
    })
    .build(),
  ResponseBuilder.clone()
    .setUrl("/api/about?file=Tavanasho")
    .setMd(tavanasho_md)
    .addGallery({
      src: "/kian/1.jpg",
      title: "i was developed iGapMessenger Web!",
      desc: "here is the birthday of 6th year of iGap",
    })
    .build(),
];
