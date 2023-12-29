import { mapSectionTwoColumns, mapSections } from './map-sections';

describe('map-sections', () => {
  it('shuld render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns, predefined if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionid).toBe('');
    expect(data.srcimg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns, if was data', () => {
    const data = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'LADING PAGE DESENVOLVIDA EM HTML, CSS E JS',
      description:
        'One domain where we see high value is in training LLMs on reference documentation, enabling developers to more quickly find solutions or get answers about the purpose or behavior of code snippets. MDNs mission is to provide a blueprint for a better internet and empower a new generation of developers and content creators to build it. We see a path forward to “overlay” useful AI-driven helpers on top of MDNs canonical web dev documentation to aid developers in new ways. Of course, human-authored canonica',
      image: {
        data: {
          id: 2,
          attributes: {
            name: 'barber.svg',
            alternativeText: null,
            caption: null,
            width: 1144,
            height: 715,
            formats: null,
            hash: 'barber_63ec0556f4',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 20.22,
            url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702163614/barber_63ec0556f4.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'barber_63ec0556f4',
              resource_type: 'image',
            },
            createdAt: '2023-12-09T23:13:35.761Z',
            updatedAt: '2023-12-09T23:13:35.761Z',
          },
        },
      },
      metada: {
        id: 1,
        name: 'intro',
        section_id: 'intro',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionid).toBe('intro');
    expect(data.srcimg).toBe(
      'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702163614/barber_63ec0556f4.svg',
    );
    expect(data.text).toBe(
      'One domain where we see high value is in training LLMs on reference documentation, enabling developers to more quickly find solutions or get answers about the purpose or behavior of code snippets. MDNs mission is to provide a blueprint for a better internet and empower a new generation of developers and content creators to build it. We see a path forward to “overlay” useful AI-driven helpers on top of MDNs canonical web dev documentation to aid developers in new ways. Of course, human-authored canonica',
    );
    expect(data.title).toBe('LADING PAGE DESENVOLVIDA EM HTML, CSS E JS');
  });
});
