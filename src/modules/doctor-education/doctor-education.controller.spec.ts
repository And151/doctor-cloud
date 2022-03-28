import { Test, TestingModule } from '@nestjs/testing';
import { DoctorEducationController } from './doctor-education.controller';
import { DoctorEducationService } from './doctor-education.service';

describe('DoctorEducationController', () => {
  let controller: DoctorEducationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorEducationController],
      providers: [DoctorEducationService],
    }).compile();

    controller = module.get<DoctorEducationController>(DoctorEducationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
