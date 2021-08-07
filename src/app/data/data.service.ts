import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Meal } from './meal';
import { Exercise } from './exercise';
import { MealList } from './mealList';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(private http: HttpClient) { }
  
  postWorkoutForm(workout: Workout): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', workout);
    // return of(workout);
  }
  
  postMealForm(mealId: any): Observable<any> {
    return this.http.post('https://putsreq.com/utEX0ksRdGqFaAqa3757', mealId);
    // return of(workout);
  }
  
  getMealItems(): Observable<Meal[]> {
    //This can be done later using get request
    return of(
      [
        {
          id: '1',
          mealName: 'Peanut',
        },
        {
          id: '2',
          mealName: 'Egg',
        },
        {
          id: '3',
          mealName: 'Apple',
        },
      ]
    );
  }

  getMealListData(): Observable<MealList[]> {
    return of(
      [
        {
            id: '1',
            date: '18 Jun 2021',
            mealName: 'Peanuts',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        },
        {
            id: '2',
            date: '19 Jul 2021',
            mealName: 'Almonds',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        },
        {
            id: '3',
            date: '20 Aug 2021',
            mealName: 'Egg',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        },
        {
            id: '4',
            date: '21 Sep 2021',
            mealName: 'Milk',
            calories: '123',
            carbs: '10',
            fats: '12',
            proteins: '18'
        }
    ]
    );
  }

  getWorkoutLogData(): Observable<Workout[]> {
    return of(
      [
        {
          id: '1',
          date: '01 Jun 2021',
          workoutName: 'Biceps',
          weight1: '10',
          weight2: '15',
          weight3: '20',
          rep1: '30',
          rep2: '25',
          rep3: '20',
        },
        {
          id: '2',
          date: '02 Jun 2022',
          workoutName: 'Arms',
          weight1: '10',
          weight2: '15',
          weight3: '20',
          rep1: '30',
          rep2: '25',
          rep3: '20',
        },
        {
          id: '3',
          date: '03 Jun 2023',
          workoutName: 'Triceps',
          weight1: '10',
          weight2: '15',
          weight3: '20',
          rep1: '30',
          rep2: '25',
          rep3: '20',
        },
      ]
    );
  }

  getExerciseData(): Observable<Exercise[]> {
    return of(
      [
        {
          id: '001',
          name: 'Biceps Curls',
          description: `
          There's a lot more to your arms than just bi's and tri's. If you want massive guns these are the muscles you need to work on.

          Located on the upper arm, your biceps are made up of a “short head” and a “long head”, which work as a single muscle. The bicep heads begin at different places around your shoulder/scapula region, but they have a common insertion point on the elbow tendon, and together allow you to bend your arm at the elbow joint (crucial for flexing), as well as helping you to curl and pull weight.          
          `,
          imgUrl: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicep-curl.gif?resize=768:*',
          category: 'Strength',
          steps: [
            `Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward.`,           
            `Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,          
            `Weights, Exercise equipment, Shoulder, Standing, Arm, Dumbbell, Joint, Human leg, Sports equipment, Biceps curl, 
            Use a thumb-less grip, advises Edgley. `,          
            `“Placing your thumb on the same side of the bar as your fingers increases peak contraction in the biceps at the top point of the movement,” he says. `,          
            `Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`
          ],
          tags: ['Arms', 'Biceps', 'ForeArms'],
        },
        {
          id: '002',
          name: 'Dumbbell Squeeze Press',
          description: `
          We're going to be honest with you when it comes to chest, the bench press is going to account for most of your workouts, but it doesn't have to be all you do. We've selected 10 chest exercises for building muscle, including presses and so much more.

          Squeezing the dumbbells together during a chest press moves the emphasis of the movement onto your pecs. This simple tweak engages them throughout the entire range of motion — a key factor to maximise muscle gain.        
          `,
          imgUrl: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/incline-bench-press.gif?resize=768:*',
          category: 'Strength',
          steps: [
            `Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward.`,           
            `Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,          
            `Weights, Exercise equipment, Shoulder, Standing, Arm, Dumbbell, Joint, Human leg, Sports equipment, Biceps curl, 
            Use a thumb-less grip, advises Edgley. `,          
            `“Placing your thumb on the same side of the bar as your fingers increases peak contraction in the biceps at the top point of the movement,” he says. `,          
            `Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`
          ],
          tags: ['Extrinsic', 'Intrinsic', 'Deltoids', 'Trapezius'],
        },
        {
          id: '003',
          name: 'Thighs',
          description: `
          There's a lot more to your arms than just bi's and tri's. If you want massive guns these are the muscles you need to work on.

          Located on the upper arm, your biceps are made up of a “short head” and a “long head”, which work as a single muscle. The bicep heads begin at different places around your shoulder/scapula region, but they have a common insertion point on the elbow tendon, and together allow you to bend your arm at the elbow joint (crucial for flexing), as well as helping you to curl and pull weight.          
          `,
          imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/squatjumps-1572368980.gif?resize=480:*',
          category: 'Strength',
          steps: [
            `Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward.`,           
            `Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,          
            `Weights, Exercise equipment, Shoulder, Standing, Arm, Dumbbell, Joint, Human leg, Sports equipment, Biceps curl, 
            Use a thumb-less grip, advises Edgley. `,          
            `“Placing your thumb on the same side of the bar as your fingers increases peak contraction in the biceps at the top point of the movement,” he says. `,          
            `Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`
          ],
          tags: ['Legs', 'Hips', 'Core'],
        },
        {
          id: '001',
          name: 'Triceps Curls',
          description: `
          There's a lot more to your arms than just bi's and tri's. If you want massive guns these are the muscles you need to work on.

          Located on the upper arm, your biceps are made up of a “short head” and a “long head”, which work as a single muscle. The bicep heads begin at different places around your shoulder/scapula region, but they have a common insertion point on the elbow tendon, and together allow you to bend your arm at the elbow joint (crucial for flexing), as well as helping you to curl and pull weight.          
          `,
          imgUrl: 'https://i.pinimg.com/originals/7e/2e/97/7e2e97148d9e62bdba3136a1eaf3883d.gif',
          category: 'Strength',
          steps: [
            `Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward.`,           
            `Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,          
            `Weights, Exercise equipment, Shoulder, Standing, Arm, Dumbbell, Joint, Human leg, Sports equipment, Biceps curl, 
            Use a thumb-less grip, advises Edgley. `,          
            `“Placing your thumb on the same side of the bar as your fingers increases peak contraction in the biceps at the top point of the movement,” he says. `,          
            `Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`
          ],
          tags: ['Arms', 'Biceps', 'ForeArms'],
        },
        {
          id: '001',
          name: 'Shoulder',
          description: `
          There's a lot more to your arms than just bi's and tri's. If you want massive guns these are the muscles you need to work on.

          Located on the upper arm, your biceps are made up of a “short head” and a “long head”, which work as a single muscle. The bicep heads begin at different places around your shoulder/scapula region, but they have a common insertion point on the elbow tendon, and together allow you to bend your arm at the elbow joint (crucial for flexing), as well as helping you to curl and pull weight.          
          `,
          imgUrl: 'http://assets.menshealth.co.uk/main/assets/uprightrow.gif?mtime=1478004583',
          category: 'Strength',
          steps: [
            `Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward.`,           
            `Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,          
            `Weights, Exercise equipment, Shoulder, Standing, Arm, Dumbbell, Joint, Human leg, Sports equipment, Biceps curl, 
            Use a thumb-less grip, advises Edgley. `,          
            `“Placing your thumb on the same side of the bar as your fingers increases peak contraction in the biceps at the top point of the movement,” he says. `,          
            `Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`
          ],
          tags: ['Arms', 'Biceps', 'ForeArms'],
        },
        {
          id: '001',
          name: 'Shoulder',
          description: `
          There's a lot more to your arms than just bi's and tri's. If you want massive guns these are the muscles you need to work on.

          Located on the upper arm, your biceps are made up of a “short head” and a “long head”, which work as a single muscle. The bicep heads begin at different places around your shoulder/scapula region, but they have a common insertion point on the elbow tendon, and together allow you to bend your arm at the elbow joint (crucial for flexing), as well as helping you to curl and pull weight.          
          `,
          imgUrl: 'https://i.pinimg.com/originals/72/12/dd/7212dd9ade76335c330a03d397d57038.gif',
          category: 'Strength',
          steps: [
            `Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward.`,           
            `Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,          
            `Weights, Exercise equipment, Shoulder, Standing, Arm, Dumbbell, Joint, Human leg, Sports equipment, Biceps curl, 
            Use a thumb-less grip, advises Edgley. `,          
            `“Placing your thumb on the same side of the bar as your fingers increases peak contraction in the biceps at the top point of the movement,” he says. `,          
            `Hold the weight at shoulder height for a brief pause, then inhale as you slowly lower back to the start position.`
          ],
          tags: ['Arms', 'Biceps', 'ForeArms'],
        },
      ]
    );
  }

}
