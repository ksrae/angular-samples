import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, FormRecord, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveComponent implements OnInit {
  profileForm = new FormGroup<any>({
    firstName: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    lastName: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
    })
  }, {updateOn: 'submit'});


  get lastName() { return this.profileForm.get('lastName') as AbstractControl; }

  fa!: FormArray;
  fr!: FormRecord;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {

    this.profileForm.valueChanges.subscribe(a => console.log({a}));
let nnfb = new FormBuilder().nonNullable;
// FormGroup<{who: FormControl<string|null>}>
let name = nnfb.group({who: new FormControl('Alex')});

console.log(name); // {who: null}

    this.fa = this.fb.array([new FormControl('a'), new FormControl('b')]);
    // this.fr = this.fb.record()




  }

  onSubmit(e: any) {
    this.profileForm.controls['lastName'].addValidators([Validators.required]);
    this.profileForm.controls['lastName'].setErrors({
      unique: true
    })

    console.log('fa', this.fa);

    this.profileForm.registerControl('zzz', this.fb.group({
      sample: ['']
    })
    );
    this.profileForm.registerControl('xxx', new FormControl(''));


    console.log(
      'parent',
      this.profileForm.controls['lastName'].getError('unique')

    );
  }
}
