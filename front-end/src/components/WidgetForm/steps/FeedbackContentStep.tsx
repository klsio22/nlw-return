import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import ScreenshotButton from './ScreenshotButoon';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  onFeedbackSend: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSend,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbackSend();
  }

  return (
    <>
      <header className='m-0 p-0'>
        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft weight='bold' className='w-4 w-4' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className='w-6 h-6'
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
        <textarea
          className='min-w-[304] w-full min-h-[112px] max-h-[100px]
          text-sm  placeholder-zinc-400 text-zinc-100 border-zinc-600
          bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 
          focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 
          scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo ...'
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type='submit'
            className='p-2 bg-brand-500 rounded-[4px]
          border-transparent flex-1 flex 
          justify-center image-center text-sm hover:bg-brand-300
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transparent-colors disabled:opacity-50 
          disabled:hover:bg-brand-500'
            disabled={comment.length === 0}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}