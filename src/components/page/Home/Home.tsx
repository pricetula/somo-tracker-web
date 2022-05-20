import React from 'react';
import Pagewrapper from 'src/components/common/Pagewrapper';
import Dialog from 'src/components/common/Dialog'
import Button from 'src/components/common/Button';
import style from './Home.module.scss';

const Home = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Pagewrapper>
      <div className={style.home}>
        <Dialog
          open={open}
          closeOnBackdropClick
          onClose={() => { setOpen(false) }}
        >
          Example dialog
        </Dialog>
        <Button onClick={() => setOpen(true)}>
          Open/close
        </Button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum cum iusto facere quidem soluta eveniet numquam hic repellat culpa?
          <br /><br /><br /><br /><br /><br />
        </p>
      </div>
    </Pagewrapper>
  );
}

export default Home;
