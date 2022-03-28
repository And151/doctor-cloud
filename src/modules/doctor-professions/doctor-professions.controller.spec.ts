import { Test, TestingModule } from '@nestjs/testing';
import { DoctorProfessionsController } from './doctor-professions.controller';
import { DoctorProfessionsService } from './doctor-professions.service';

describe('DoctorProfessionsController', () => {
  let controller: DoctorProfessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorProfessionsController],
      providers: [DoctorProfessionsService],
    }).compile();

    controller = module.get<DoctorProfessionsController>(DoctorProfessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
