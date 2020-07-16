import { AnimationController } from '@ionic/angular';
const animationCtrl = new AnimationController();

export const fadeIn = (baseEl: any) => {
  const backdropAnimation = animationCtrl
    .create()
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

  const wrapperAnimation = animationCtrl
    .create()
    .addElement(baseEl.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, opacity: '0', transform: 'none' },
      { offset: 1, opacity: '0.99', transform: 'none' },
    ]);
  0;
  return animationCtrl
    .create()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(250)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
export const fadeOut = (baseEl: any) => {
  return fadeIn(baseEl).direction('reverse');
};
