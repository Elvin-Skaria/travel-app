import { ImageSourcePropType } from "react-native";
import { MammothLake, OsakaCastle, TokyoTemple } from "../assets/images";

export type PlacesDataType = {
  id: number;
  location: string;
  category: "mountains" | "temples" | "lakes";
  image: ImageSourcePropType;
  desc: string;
  subDesc: string;
};

export const PlacesData: PlacesDataType[] = [
  {
    id: 0,
    location: "Osaka Castle",
    category: "temples",
    image: OsakaCastle,
    desc: `Osaka Castle (大坂城 or 大阪城, Ōsaka-jō) is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.`,
    subDesc: `The main keep of Osaka Castle is situated on a plot of land roughly one square kilometre. It is built on two raised platforms of landfill supported by sheer walls of cut rock, using a technique called burdock piling, each overlooking a moat. The keep is five stories on the outside and eight stories on the inside and built atop a tall stone foundation to protect its occupants from attackers.`
  },
  {
    id: 1,
    location: "Tokyo Temple",
    category: "temples",
    image: TokyoTemple,
    desc: `Sensō-ji (浅草寺, officially Kinryū-zan Sensō-ji (金龍山浅草寺), also known as Asakusa Kannon (浅草観音)), [sẽ̞ꜜɰ̃so̞ːʑi] is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is Tokyo's oldest temple, and one of its most significant. Formerly associated with the Tendai sect of Buddhism, it became independent after World War II. It is dedicated to Kannon, the bodhisattva of compassion, and is the most widely visited religious site in the world with over 30 million visitors annually. Adjacent to the temple is a five-story pagoda, the Asakusa Shinto shrine, as well as many shops with traditional goods in the Nakamise-dōri.`,
    subDesc: `The temple has a titanium tiled roof that maintains the historic image but is stronger and lighter`,
  },
  {
    id: 2,
    location: "Mammoth Lake",
    category: "lakes",
    image: MammothLake,
    desc: `Mammoth Lakes is a town in Mono County, California, and is the county's only incorporated community. It is located immediately to the east of Mammoth Mountain, at an elevation of 7,880 feet (2,400 m).[4][6] As of the 2020 United States Census, the population was 7,191, reflecting a 12.7% decrease from the 2010 Census.`,
    subDesc: `The town is surrounded by acres of forest and is bordered by the Ansel Adams and John Muir Wilderness Areas. The eastern entrance of Yosemite National Park is located 32 miles (51 km) north of town. The town is situated in the southwestern, mountainous part of Mono County, California.`,
  },
];
