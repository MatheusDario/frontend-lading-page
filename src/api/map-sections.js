export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcimg = '' } = '' } = '' } = '',
    metada: { background = false, section_id: sectionid = '' } = '',
  } = section;

  return {
    component,
    title,
    text,
    srcimg,
    background,
    sectionid,
  };
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
