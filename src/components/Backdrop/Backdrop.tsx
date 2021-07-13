import { BackdropLayout } from './styles';

interface Props {
  clickLayout(): void;
}

const Backdrop = ({ clickLayout }: Props) => {
  return <BackdropLayout onClick={clickLayout} />;
};

export default Backdrop;
