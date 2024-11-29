import { IsString, IsInt, IsBoolean, Min, Max } from 'class-validator'

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsInt()
  @Min(18)
  @Max(99)
  readonly age: number;

  @IsString()
  readonly gender: string;

  @IsBoolean()
  readonly problems: boolean;
}
