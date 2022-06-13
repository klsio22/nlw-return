import { useState } from 'react';
import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';
import bugImageUrl from '/src/assets/bug.svg';
import ideaImageUrl from '/src/assets/idea.svg';
import thoughtImageUrl from '/src/assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },

  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },

  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackTypes] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleRestartFeedBack() {
    setFeedbackSend(false)
    setFeedbackTypes(null);
  }

  return (
    <div
      className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex 
      flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'
    >
      {feedbackSend ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedBack}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedBack}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400 '>
        Feito com ♥ pela{' '}
        <a href='' className='underline underline-offset-1'>
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
