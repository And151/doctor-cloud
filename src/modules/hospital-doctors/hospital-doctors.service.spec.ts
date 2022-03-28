import { Test, TestingModule } from '@nestjs/testing';
import { HospitalDoctorsService } from './hospital-doctors.service';

describe('HospitalDoctorsService', () => {
  let service: HospitalDoctorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalDoctorsService],
    }).compile();

    service = module.get<HospitalDoctorsService>(HospitalDoctorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
