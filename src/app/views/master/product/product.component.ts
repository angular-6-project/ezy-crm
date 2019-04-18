import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/master/product.service';
import Products from './Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productss: Products[];

  vahicleMake: string[] = ['Dodge', 'Chevrolet', 'Toyota', 'Sienna', 'Hyundai'];
  brands: string[] = ['BMW', 'Mercedes', 'Toyota'];
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      productNumber: ['', Validators.required],
      productName: ['', [Validators.required, Validators.minLength(4)]],
      vehicleMake: ['', Validators.required],
      brand: ['', Validators.required],
      productCategory: ['', Validators.required],
      oemNo: ['', Validators.required],
      productGroup: ['', Validators.required],
      unit: ['', Validators.required],
      countryOfOrigin: ['', Validators.required],
      remarks: ['', Validators.required],
      sellingPrice: ['', Validators.required],
      partsLocation: ['', Validators.required],
    });

    this.productService
      .getProducts()
      .subscribe((data: Products[]) => {
        this.productss = data;
      });
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit({value}) {
    this.submitted = true;
    this.productService.addProduct(value)
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });

    console.log(value);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    document.writeln('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

}
