export default function correctPhoneNumber(phoneNumber) {
  const correctNumber = phoneNumber.split(/[^\d]+/g).join('');
  return `+${correctNumber.length === 11 ? '7'.concat(correctNumber.slice(1)) : correctNumber}`;
}
