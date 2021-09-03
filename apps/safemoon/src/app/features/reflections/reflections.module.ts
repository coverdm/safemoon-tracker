import { NgModule } from '@angular/core';
import { ReflectionsRoutingModule } from './reflections-routing.module';
import { ReflectionsComponent } from './pages/reflections.component';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { InputModule } from '../../shared/input/input.module';
import { ButtonModule } from '../../shared/button/button.module';
import { DividerModule } from '../../shared/divider/divider.module';
import { ReflectionCalculatorService } from './services/reflection-calculator.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDropdownModule } from '../../shared/input-dropdown/input-dropdown.module';

@NgModule({
  imports: [ReflectionsRoutingModule, FormFieldModule, InputModule, ButtonModule, DividerModule, CommonModule, ReactiveFormsModule, InputDropdownModule],
  declarations: [ReflectionsComponent],
  providers: [ReflectionCalculatorService]
})
export class ReflectionsModule {}
