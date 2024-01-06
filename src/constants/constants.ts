import { IGenre, INavList, ISocialList } from "@app-types/types";
import FacebookIcon from "@assets/icons/social/Facebook.svg";
import TwitterIcon from "@assets/icons/social/Twitter.svg";
import InstagramIcon from "@assets/icons/social/Instagram.svg";
import LinkedInIcon from "@assets/icons/social/LinkedIn.svg";

export const moviesPerPage = 20;

export const genres: IGenre[] = [
  {
    id: 1,
    name: "All",
    genreId: "",
  },
  {
    id: 28,
    name: "action",
    genreId: "28",
  },
  {
    id: 18,
    name: "drama",
    genreId: "18",
  },
  {
    id: 80,
    name: "crime",
    genreId: "80",
  },
  {
    id: 10749,
    name: "romantic",
    genreId: "10749",
  },
  {
    id: 27,
    name: "horror",
    genreId: "27",
  },
  {
    id: 99,
    name: "documentary",
    genreId: "99",
  },
];

export const allGenres: IGenre[] = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const baseYoutubeUrl: string = "https://www.youtube.com/embed/";

export const youtubeParams: string = "?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1";

export const baseImgUrl: string = "https://image.tmdb.org/t/p/";

export const languageUS: string = "en-US";

export const minimumValueLength: number = 1;

export const withoutGenre = "Without genre";

export const NavList: INavList[] = [
  {
    id: 1,
    value: "TermsPrivacyPolicy  &  Safety",
    link: "https://www.modsen-software.com/",
  },
  {
    id: 2,
    value: "How YouTube works",
    link: "https://www.modsen-software.com/",
  },
  {
    id: 3,
    value: "Test new features",
    link: "https://www.modsen-software.com/",
  },
  {
    id: 4,
    value: "About  Press  Copyright",
    link: "https://www.modsen-software.com/",
  },
  {
    id: 5,
    value: "Contact us  Creators",
    link: "https://www.modsen-software.com/",
  },
  {
    id: 6,
    value: "Advertise  Developers",
    link: "https://www.modsen-software.com/",
  },
];

export const SocialList: ISocialList[] = [
  {
    id: 1,
    icon: FacebookIcon,
    link: "https://www.facebook.com/ModsenSoftware",
  },
  {
    id: 2,
    icon: TwitterIcon,
    link: "https://twitter.com/modsencompany",
  },
  {
    id: 3,
    icon: InstagramIcon,
    link: "https://www.instagram.com/modsencompany",
  },
  {
    id: 4,
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/modsen",
  },
];
