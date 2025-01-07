import { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';


const textVariants = cva('', {
  variants: {
    type: {
      'title-xlarge': 'text-3xl font-medium text-foreground tracking-normal',
      'title-large': 'text-2xl font-medium text-foreground',
      'title-medium': 'text-xl font-semibold text-foreground',
      'title-small': 'text-lg font-medium text-foreground',
      'paragraph-large': 'text-base font-normal text-foreground',
      'paragraph-medium': 'text-sm font-normal text-foreground',
      'paragraph-small': 'text-xs font-normal text-foreground',
    },
  },
  defaultVariants: {
    type: 'paragraph-medium', 
  },
});


interface TextProps extends PropsWithChildren, VariantProps<typeof textVariants> {}


const Text: React.FC<TextProps> = ({ children, type }) => {
  return <div className={textVariants({ type })}>{children}</div>;
};

export default Text;
