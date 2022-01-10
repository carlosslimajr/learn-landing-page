import React from 'react'

import * as S from './styles'
import { Image } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type socialLinks = {
  slug: string
  link: string
}

type Props = {
  name: string
  role: string
  image: Image
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  // socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image alt={image.alternativeText} src={getImageUrl(image.url)} />

    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    {/* <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.link}>
          <a href={item.link} title={item.slug}>
            {icons[item.slug]}

    </S.SocialLinks> */}
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
