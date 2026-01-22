import { MainLayout } from '@/components/layout/MainLayout';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { IndustrialEcosystem } from '@/components/sections/IndustrialEcosystem';
import { DepartmentSnapshot } from '@/components/sections/DepartmentSnapshot';
import { PolicyHub } from '@/components/sections/PolicyHub';
import { KYDKnowledgeCenter } from '@/components/sections/KYDKnowledgeCenter';
import { EngagementZone } from '@/components/sections/EngagementZone';
import { MediaOutreach } from '@/components/sections/MediaOutreach';

const Index = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <IndustrialEcosystem />
      <DepartmentSnapshot />
      <PolicyHub />
      <KYDKnowledgeCenter />
      <EngagementZone />
      <MediaOutreach />
    </MainLayout>
  );
};

export default Index;
