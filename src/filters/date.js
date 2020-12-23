export default function (num) {
  const date = new Date(Number(num) * 1000);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
