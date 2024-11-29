'use client';

import check from '@public/icons/check.svg';
import Image from 'next/image';

interface IStages {
  totalStages: number;
  currentStage?: number;
  onChange?: () => void;
}

export default function Stages({ totalStages, currentStage }: IStages) {
  const currentStageIndex = currentStage || 0;
  const stageArray = Array.from({ length: totalStages });
  const lastStage = stageArray.length - 1;

  return (
    <>
      <p className="text-gray-500 text-xs mb-1">
        <span className={`${currentStageIndex !== 0 && 'text-primary-600'}`}>
          {currentStageIndex}
        </span>
        /{totalStages} -{' '}
        <span className={`${currentStageIndex !== 0 && 'text-primary-600'}`}>
          Etapas completadas
        </span>
      </p>
      <div className="flex gap-1">
        {stageArray.map((_, index) => {
          const isCompleted = index < currentStageIndex;
          return (
            <div key={index} className="flex gap-1 items-center">
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full 
                 text-gray-800 border border-gray-200 text-xs ${isCompleted ? 'bg-primary-600' : 'bg-white'}`}
              >
                {!isCompleted ? index + 1 : <Image className="w-4 h-4" src={check} alt="Check" />}
              </span>
              {lastStage !== index && (
                <>
                  <span
                    className={`inline-block w-1 h-1 rounded-full  ${isCompleted ? 'bg-primary-600' : 'bg-gray-200'}`}
                  ></span>
                  <span
                    className={`inline-block w-1 h-1 rounded-full  ${isCompleted ? 'bg-primary-600' : 'bg-gray-200'}`}
                  ></span>
                  <span
                    className={`inline-block w-1 h-1 rounded-full  ${isCompleted ? 'bg-primary-600' : 'bg-gray-200'}`}
                  ></span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
