import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <div>
      <Popover.Button
        className='top-5 right-3 absolute text-zinc-400 hover:text-zinc-100 '
        title='Fechar formulário'
      >
        <X weight='bold' className='w-4 w-4' />
      </Popover.Button>
    </div>
  );
}
