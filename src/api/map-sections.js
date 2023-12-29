export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const {
        __component: { text_grid = [], image_grid = [] },
      } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        //return mapImageGrid(section);
      }
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

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metada: { background = false, section_id: sectionid = '' } = '',
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionid,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metada: { background = false, section_id: sectionid = '' } = '',
  } = section;

  return {
    component,
    title,
    description,
    background,
    grid,
    sectionid,
  };
};
