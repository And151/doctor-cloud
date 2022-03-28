import { Test, TestingModule } from '@nestjs/testing';
import { DoctorProfessionsService } from './doctor-professions.service';

describe('DoctorProfessionsService', () => {
  let service: DoctorProfessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorProfessionsService],
    }).compile();

    service = module.get<DoctorProfessionsService>(DoctorProfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
