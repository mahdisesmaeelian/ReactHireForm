import logoImg from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Logo" />
      <h1>فرم استخدام</h1>
    </header>
  );
}
