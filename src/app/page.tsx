
import Hero from "@/components/sections/Hero";
import ClubIntroduction from "@/components/sections/ClubIntroduction";
import ClubHighlights from "@/components/sections/ClubHighlights";
import FeaturedGallery from "@/components/sections/FeaturedGallery";
import CommitteePreview from "@/components/sections/CommitteePreview";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import ContestPreview from "@/components/sections/ContestPreview";
import LatestAnnouncements from "@/components/sections/LatestAnnouncements";
import ContactPreview from "@/components/sections/ContactPreview";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ClubIntroduction />
      <ClubHighlights />
      <FeaturedGallery />
      <CommitteePreview />
      <UpcomingEvents />
      <ContestPreview />
      <LatestAnnouncements />
      <ContactPreview />
      <CallToAction />
    </>
  );
}
