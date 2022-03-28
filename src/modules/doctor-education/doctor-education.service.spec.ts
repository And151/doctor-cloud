import { Test, TestingModule } from '@nestjs/testing';
import { DoctorEducationService } from './doctor-education.service';

describe('DoctorEducationService', () => {
  let service: DoctorEducationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorEducationService],
    }).compile();

    service = module.get<DoctorEducationService>(DoctorEducationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
