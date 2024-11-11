import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BehaviorSubject, debounceTime, filter, Subject, takeUntil } from 'rxjs';
import { tokens } from '../../../core/constants/tokens.const';

@Component({
  selector: 'acn-input-search',
  standalone: true,
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // PrimeNg
    InputTextModule
  ],
  templateUrl: './input-search.component.html'
})
export class InputSearchComponent implements OnDestroy {

  private readonly searchDebounceTime = inject(tokens.appConfig).searchDebounceTime;
  private readonly searchChanged$ = new BehaviorSubject<string>('');
  private readonly destroy$ = new Subject<boolean>();

  private firstSearch = true;

  protected readonly searchByNumberOfCharacters = inject(tokens.appConfig).searchByNumberOfCharacters;

  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSearch(): void {
    if (!this.value)
      this.valueChange.emit('');
    if (this.value?.length < this.searchByNumberOfCharacters)
      return;
    if (this.firstSearch) {
      this.subscribeSearchChanged();
      this.firstSearch = false;
    }

    this.searchChanged$.next(this.value);
  }

  onClearSearch(): void {
    this.value = '';
    this.valueChange.emit('');
  }

  private subscribeSearchChanged(): void {
    this.searchChanged$.pipe(
      debounceTime(this.searchDebounceTime),
      takeUntil(this.destroy$),
      filter(value => value !== null)
    ).subscribe(value => this.valueChange.emit(value));
  }
}
