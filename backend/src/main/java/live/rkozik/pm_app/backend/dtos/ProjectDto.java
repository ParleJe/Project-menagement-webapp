package live.rkozik.pm_app.backend.dtos;

import lombok.*;
import org.springframework.web.util.UriComponents;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDto {
    protected Long id;
    protected String name;
    protected String description;
    private List<SimplifiedUserDto> usersAssigned;
    private List<SimplifiedUserDto> tasks;
}
