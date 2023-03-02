import { createCallbackManager } from "../utils/callback";
import { useEffect, useState } from "react";
import { AudioStatusEnum, AudioType } from "../constants/types";

const audioCallbackManager = createCallbackManager();

const audioInstance = new Audio();
let effectsInstance: Array<HTMLAudioElement> = [];

export function useAudio({
  playSrc,
  audioType,
  playOnMount = true,
}: {
  playSrc: string;
  audioType: AudioType;
  playOnMount?: boolean;
}) {
  const [status, setStatus] = useState<AudioStatusEnum>(AudioStatusEnum.Pause);

  function play(retry = 3) {
    if (audioType === AudioType.Effect) {
      const effectInstance = new Audio(playSrc);
      effectsInstance.push(effectInstance);
      effectInstance
        .play()
        ?.then(() => setStatus(AudioStatusEnum.Playing))
        ?.catch(() => {
          if (retry === 0) setStatus(AudioStatusEnum.Errored);
          else return setTimeout(play, 1000);
        });
      return;
    }
    if (audioInstance?.src) {
      audioInstance?.pause();
    }
    setTimeout(() => {
      audioInstance.src = playSrc;
      audioInstance
        .play()
        ?.then(() => setStatus(AudioStatusEnum.Playing))
        ?.catch(() => {
          if (retry === 0) setStatus(AudioStatusEnum.Errored);
          else return setTimeout(play, 1000);
        });
    }, 1000);
  }

  function pause() {
    if (audioType === AudioType.Effect) {
      effectsInstance?.forEach((effectsInstance) => {
        effectsInstance?.pause();
      });
      return;
    }
    audioInstance?.pause();
  }

  function destroy() {
    effectsInstance = effectsInstance?.filter(
      (effectsInstance) => effectsInstance?.src !== playSrc
    );
  }

  useEffect(() => {
    if (playOnMount) play();
  }, []);
  //
  // useEffect(() => {
  //   audioCallbackManager.addCallback(
  //     (audioType: string, command: AudioCommandsEnum) => {
  //       if (src === audioSrc) {
  //         switch (command) {
  //           case AudioCommandsEnum.Pause:
  //             audioInstance.pause();
  //             setStatus(AudioStatusEnum.Pause);
  //             break;
  //           case AudioCommandsEnum.Play:
  //             play(audioSrc);
  //             break;
  //           case AudioCommandsEnum.Next:
  //             play("NextMusic");
  //             break;
  //           case AudioCommandsEnum.Prev:
  //             play("PrevMusic");
  //             break;
  //         }
  //       }
  //     }
  //   );
  // }, []);

  return {
    status,
    play,
    pause,
    destroy,
  };
}
