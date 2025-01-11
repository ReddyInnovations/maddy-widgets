export interface ProfileProps {
  profileImage?: string;
  siteTitle: string;
  socialLinks: Record<string, string>;
  profileText: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    linkText: string;
    linkURL: string;
  };
}
