import { invalid } from "moment";
import icons from "./icons";
const { AiFillStar, AiOutlineStar } = icons;

export const createSlug = (string) =>
  string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");

export const formatMoney = (number) =>
  Number(number?.toFixed(1)).toLocaleString();

export const renderStarFormatNumber = (number, size) => {
  if (!Number(number)) return;
  const stars = [];
  for (let i = 0; i < number; i++)
    stars.push(<AiFillStar color="orange" size={size || 16} />);
  for (let i = 5; i > number; i--)
    stars.push(<AiOutlineStar color="orange" size={size || 16} />);
  return stars;
};

export function secondsToHms(d) {
  d = Number(d) / 1000;
  const h = Math?.floor(d / 3600);
  const m = Math?.floor((d % 3600) / 60);
  const s = Math?.floor((d % 3600) % 60);

  return { h, m, s };
}

export const validate = (payload, setInvalidFields) => {
  let invalids = 0;
  const formatPayload = Object.entries(payload);
  for (let arr of formatPayload) {
    if (arr[1].trim() === "") {
      invalids++;
      setInvalidFields((prev) => [
        ...prev,
        {
          name: arr[0],
          mes: "Required this field",
        },
      ]);
    }
  }

  for (let arr of formatPayload) {
    switch (arr[0]) {
      case "email":
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!arr[1].match(regex)) {
          invalid++;
          setInvalidFields((prev) => [
            ...prev,
            {
              name: arr[0],
              mes: "Email invalid",
            },
          ]);
        }
        break;
      // case 'password':
      //      if(!arr[1].length < 5){
      //         invalid++;
      //         setInvalidFields(prev => [
      //             ...prev, {
      //                 name: arr[0],
      //                 mes: 'Password minimum required length 6 characters'

      //             }
      //         ])
      //     }
      //         break;
      default:
        break;
    }
  }

  return invalids;
};
