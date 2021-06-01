package live.rkozik.pm_app.backend.models;

import live.rkozik.pm_app.backend.dtos.SimplifiedDto;

public interface Substitutable {
    Substitutable substituteStaticMembers(SimplifiedDto source);
}
