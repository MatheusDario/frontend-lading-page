import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section-Container</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quisquam
          modi minus? Architecto unde sequi mollitia quibusdam vero eos
          provident nisi minima aut optio magni perspiciatis, sit voluptates,
          doloremque numquam?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
