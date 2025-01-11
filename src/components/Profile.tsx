import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { ProfileProps } from '@src/interfaces/profile';
import {
  Text,
  Section,
  Content,
  SocialIcons,
  StyledLink,
  ImageContainer,
  ImageWrapper,
  ProfileImage,
} from '@src/styles/profile.styles';

export const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'whatsapp':
      return <FaWhatsapp />;
    case 'instagram':
      return <FaInstagram />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'gmail':
      return <FaEnvelope />;
    default:
      return null;
  }
};

const Profile: React.FC<ProfileProps> = ({
  profileImage,
  siteTitle,
  socialLinks,
  profileText,
}) => {
  const socialLinksData = Object.entries(socialLinks).map(([key, url]) => ({
    icon: getSocialIcon(key),
    url,
  }));

  return (
    <Section>
      <Content>
        <Text>
          <h1>{profileText.greeting}</h1>
          <h2>{profileText.name}</h2>
          <h3>
            And I'm a <span>{profileText.title}</span>
          </h3>
          <p>{profileText.description}</p>
          <SocialIcons>
            {socialLinksData.map(
              (link, index) =>
                link.icon && (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                )
            )}
          </SocialIcons>
          <StyledLink to={profileText.linkURL}>
            {profileText.linkText}
          </StyledLink>
        </Text>

        <ImageContainer>
          <ImageWrapper>
            <ProfileImage src={profileImage} alt={siteTitle} />
          </ImageWrapper>
        </ImageContainer>
      </Content>
    </Section>
  );
};

export default Profile;
