package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoaderDebug implements ApplicationRunner {

    final private HugeTaskRepository hugeTaskRepository;
    final private ProjectRepository projectRepository;
    final private ToDoRepository toDoRepository;
    final private UserRepository userRepository;

    private List<User> users = new ArrayList<>();
    private List<Project> projects = new ArrayList<>();
    private List<ToDo> toDos = new ArrayList<>();
    private List<HugeTask> hugeTasks = new ArrayList<>();

    @Autowired
    public DataLoaderDebug(HugeTaskRepository hugeTaskRepository, ProjectRepository projectRepository,
                           ToDoRepository toDoRepository, UserRepository userRepository) {
        this.hugeTaskRepository = hugeTaskRepository;
        this.projectRepository = projectRepository;
        this.toDoRepository = toDoRepository;
        this.userRepository = userRepository;
    }

    private void initUsers() {
        users.add(User.builder().email("espencer@gmail.com").name("Edmund").surname("Spencer").password("spencere").build());
        users.add(User.builder().email("ebehn@gmail.com").name("Aphra").surname("Behn").password("behap").build());
        users.add(User.builder().email("jclarie@gmail.com").name("John").surname("Clarie").password("clarjo").build());
        users.add(User.builder().email("drossetti@gmail.com").name("Dante").surname("Rossetti").password("rossetde").build());
        users.add(User.builder().email("sarmitage@gmail.com").name("Simon").surname("Armitage").password("armitasa").build());
        userRepository.saveAll(users);
        userRepository.flush();
        users = userRepository.findAll();
    }

    private void initProjects() {
        projects.add(Project.builder().name("human relations").description("table for HR").usersAssigned(users.subList(0, 1)).build());
        projects.add(Project.builder().name("IT department").description("table for IT").usersAssigned(users.subList(0, 3)).build());
        projects.add(Project.builder().name("marketing").description("table for marketing").usersAssigned(users.subList(1, 4)).build());

        projectRepository.saveAll(projects);
        projectRepository.flush();
        projects = projectRepository.findAll();
    }

    private void initHugeTasks() {
        hugeTasks.add(HugeTask.builder().name("Add store integration").priority(3).description("Amazon store Api to generate recipies")
                .project(projects.get(1)).hugeTaskAssigned(users.subList(0, 3)).state(StateEnum.IN_PROGRESS.toString()).build());
        hugeTasks.add(HugeTask.builder().name("create brochure").priority(5).description("create brochure")
                .project(projects.get(0)).hugeTaskAssigned(users.subList(0, 1)).state(StateEnum.IN_PROGRESS.toString()).build());
        hugeTasks.add(HugeTask.builder().name("hire new developer").priority(3).description("hire new developer")
                .project(projects.get(0)).hugeTaskAssigned(users.subList(0, 1)).state(StateEnum.DONE.toString()).build());
        hugeTasks.add(HugeTask.builder().name("find new markets").priority(2).description("find new markets")
                .project(projects.get(2)).hugeTaskAssigned(users.subList(1, 4)).state(StateEnum.IN_PROGRESS.toString()).build());
        hugeTasks.add(HugeTask.builder().name("create new App").priority(1).description("create new App")
                .project(projects.get(1)).hugeTaskAssigned(users.subList(0, 3)).state(StateEnum.DONE.toString()).build());
        hugeTasks.add(HugeTask.builder().name("Get new company name").priority(4).description("Get new company name")
                .project(projects.get(2)).hugeTaskAssigned(users.subList(1, 4)).state(StateEnum.DONE.toString()).build());
        hugeTasks.add(HugeTask.builder().name("create new product").priority(2).description("create new product")
                .project(projects.get(2)).hugeTaskAssigned(users.subList(1, 4)).state(StateEnum.NOT_STARTED.toString()).build());

        hugeTaskRepository.saveAll(hugeTasks);
        hugeTaskRepository.flush();
        hugeTasks = hugeTaskRepository.findAll();
    }

    private void initToDos() {
        toDos.add(ToDo.builder().state(StateEnum.DONE.toString()).description("task1").name("task1").hugeTask(hugeTasks.get(0)).build());
        toDos.add(ToDo.builder().state(StateEnum.NOT_STARTED.toString()).description("task2").name("task1").hugeTask(hugeTasks.get(0)).build());
        toDos.add(ToDo.builder().state(StateEnum.IN_PROGRESS.toString()).description("task3").name("task2").hugeTask(hugeTasks.get(0)).build());
        toDos.add(ToDo.builder().state(StateEnum.DONE.toString()).description("task4").name("task3").hugeTask(hugeTasks.get(1)).build());
        toDos.add(ToDo.builder().state(StateEnum.DONE.toString()).description("task5").name("task4").hugeTask(hugeTasks.get(1)).build());
        toDos.add(ToDo.builder().state(StateEnum.IN_PROGRESS.toString()).description("task6").name("task5").hugeTask(hugeTasks.get(2)).build());
        toDos.add(ToDo.builder().state(StateEnum.NOT_STARTED.toString()).description("task7").name("task6").hugeTask(hugeTasks.get(2)).build());
        toDos.add(ToDo.builder().state(StateEnum.NOT_STARTED.toString()).description("task8").name("task7").hugeTask(hugeTasks.get(3)).build());
        toDos.add(ToDo.builder().state(StateEnum.DONE.toString()).description("task9").name("task8").hugeTask(hugeTasks.get(3)).build());
        toDos.add(ToDo.builder().state(StateEnum.IN_PROGRESS.toString()).description("task10").name("task9").hugeTask(hugeTasks.get(4)).build());
        toDos.add(ToDo.builder().state(StateEnum.IN_PROGRESS.toString()).description("task11").name("task10").hugeTask(hugeTasks.get(4)).build());
        toDos.add(ToDo.builder().state(StateEnum.DONE.toString()).description("task12").name("task11").hugeTask(hugeTasks.get(5)).build());
        toDos.add(ToDo.builder().state(StateEnum.IN_PROGRESS.toString()).description("task13").name("task13").hugeTask(hugeTasks.get(5)).build());
        toDos.add(ToDo.builder().state(StateEnum.NOT_STARTED.toString()).description("task14").name("task14").hugeTask(hugeTasks.get(6)).build());

        toDoRepository.saveAll(toDos);
        toDoRepository.flush();
        toDos = toDoRepository.findAll();
    }

    @Override
    public void run(ApplicationArguments args) {
        initUsers();
        initProjects();
        initHugeTasks();
        initToDos();
    }
}
