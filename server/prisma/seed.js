import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
      where: { email: 'admin@arasecureway.com' },
      update: {},
      create: {
        name: 'Admin',
        email: 'admin@arasecureway.com',
        password: hashedPassword,
        role: 'ADMIN',
      },
    });

    // Create some initial categories
    const categories = await Promise.all([
      prisma.categories.upsert({
        where: { category: 'cybersecurity' },
        update: {},
        create: {
          category: 'cybersecurity',
          title: 'Cybersecurity Solutions',
          mainDescription: 'Comprehensive cybersecurity solutions for modern businesses',
          overviewTitle: 'Our Cybersecurity Approach',
          overviewContent: 'We provide end-to-end security solutions to protect your digital assets',
          offeringsTitle: 'Security Offerings',
          offeringsContent: 'From threat detection to incident response, we offer complete security coverage',
        },
      }),
      prisma.categories.upsert({
        where: { category: 'cloud-services' },
        update: {},
        create: {
          category: 'cloud-services',
          title: 'Cloud Services',
          mainDescription: 'Enterprise-grade cloud solutions and services',
          overviewTitle: 'Cloud Solutions Overview',
          overviewContent: 'Scalable and secure cloud infrastructure for your business needs',
          offeringsTitle: 'Cloud Offerings',
          offeringsContent: 'Complete suite of cloud services including migration, hosting, and management',
        },
      }),
    ]);

    // Create some technologies
    const technologies = await Promise.all([
      prisma.technology.upsert({
        where: { name: 'artificial-intelligence' },
        update: {},
        create: {
          name: 'artificial-intelligence',
          title: 'Artificial Intelligence',
          description: 'Advanced AI solutions for business automation',
          benefits: 'Improved efficiency, reduced costs, and enhanced decision making',
        },
      }),
      prisma.technology.upsert({
        where: { name: 'blockchain' },
        update: {},
        create: {
          name: 'blockchain',
          title: 'Blockchain Technology',
          description: 'Secure and transparent blockchain solutions',
          benefits: 'Enhanced security, transparency, and traceability',
        },
      }),
    ]);

    // Create home content
    const home = await prisma.home.upsert({
      where: { id: 1 },
      update: {},
      create: {
        aboutUs: {
          title: 'About Ara Secureway',
          content: 'Leading provider of cybersecurity and technology solutions',
          mission: 'To secure and empower businesses in the digital age',
        },
        advantages: {
          items: [
            {
              title: 'Expert Team',
              description: 'Highly skilled professionals with years of experience',
            },
            {
              title: '24/7 Support',
              description: 'Round-the-clock technical support and monitoring',
            },
            {
              title: 'Custom Solutions',
              description: 'Tailored solutions to meet your specific needs',
            },
          ],
        },
        services: {
          featured: [
            'Cybersecurity Consulting',
            'Cloud Solutions',
            'AI Implementation',
            'Blockchain Development',
          ],
        },
      },
    });

    console.log('Seed data created successfully');
    console.log('Admin user created:', admin.email);
    console.log('Categories created:', categories.length);
    console.log('Technologies created:', technologies.length);
    console.log('Home content created');

  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
