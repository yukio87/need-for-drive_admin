import styles from './Footer.module.scss'

const { footer } = styles

const { link, copyright } = styles

export const Footer = () => {
  return (
    <footer className={footer}>
      <a
        className={link}
        href="https://github.com/yukio87/need-for-drive"
        target="_blank"
        rel="noreferrer"
      >
        Главная страница
      </a>
      <span className={copyright}>Copyright © 2024 Simbirsoft</span>
    </footer>
  )
}
